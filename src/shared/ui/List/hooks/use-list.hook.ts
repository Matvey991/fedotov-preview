import { useCallback, useState } from 'react'

export const useListHook = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = useCallback((index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }, [])

    return {
        toggleItem,
        openIndex,
    }
}
