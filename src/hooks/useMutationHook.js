import { useMutation } from "@tanstack/react-query"

export const useMutaionHooks = (fnCallback) => {
    const mutation = useMutation ({
        mutationFn: fnCallback
    })
    return mutation
}