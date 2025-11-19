// import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// export function useFetch<TData, TParams extends Record<string, any> = {}>(
//   key: string,
//   apiFunc: (params?: TParams) => Promise<TData>,
//   params?: TParams,
//   options?: UseQueryOptions<TData>
// ){
//   return useQuery<TData>({
//     queryKey: [key, params],
//     queryFn: () => apiFunc(params),
//     staleTime: 1000 * 60 * 5,
//     refetchOnWindowFocus: false,
//     ...options,
//   });

// }