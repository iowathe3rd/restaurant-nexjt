import { useState } from 'react'
import {useIsomorphicLayoutEffect} from "@/hooks/useIsomorphicLayoutEffect";

// Сопоставление breakpoint-ов из Tailwind CSS с соответствующими медиа-запросами
const BREAKPOINTS = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
}

type UseMediaQueryOptions = {
    defaultValue?: boolean
    initializeWithValue?: boolean
}

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(
    breakpoint: keyof typeof BREAKPOINTS, // Тип для breakpoint-ов из Tailwind CSS
    {
        defaultValue = false,
        initializeWithValue = true,
    }: UseMediaQueryOptions = {},
): boolean {
    const getMatches = (query: string): boolean => {
        if (IS_SERVER) {
            return defaultValue
        }
        return window.matchMedia(query).matches
    }

    // Получаем медиа-запрос для заданного breakpoint-а
    const query = BREAKPOINTS[breakpoint]

    const [matches, setMatches] = useState<boolean>(() => {
        if (initializeWithValue) {
            return getMatches(query)
        }
        return defaultValue
    })

    // Обработчик изменения медиа-запроса
    function handleChange() {
        setMatches(getMatches(query))
    }

    useIsomorphicLayoutEffect(() => {
        const matchMedia = window.matchMedia(query)

        // Обновляем состояние соответствия медиа-запросу при первой загрузке и изменении запроса
        handleChange()

        // Добавляем слушателя изменений медиа-запроса
        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange)
        } else {
            matchMedia.addEventListener('change', handleChange)
        }

        // Отписываемся от слушателя при размонтировании компонента
        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange)
            } else {
                matchMedia.removeEventListener('change', handleChange)
            }
        }
    }, [query])

    return matches
}
