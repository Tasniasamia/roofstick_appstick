// import { useEffect, useRef } from "react";
// import {
//   useMutation,
//   useQueryClient,
//   UseMutationResult,
// } from "@tanstack/react-query";

// interface UseActionProps<TData, TParams> {
//   key: string[];
//   apiFunc: (data: TParams) => Promise<TData>;
//   funcData?: TParams;       
//   runOnMount?: boolean;    
//   onSuccess?: (data: TData) => void;
//   onError?: (err: any) => void;
// }

// export function useAction<TData = any, TParams = any>({
//   key,
//   apiFunc,
//   funcData,
//   runOnMount = true,
//   onSuccess,
//   onError,
// }: UseActionProps<TData, TParams>): UseMutationResult<TData, unknown, TParams> {

//   const queryClient = useQueryClient();

//   const prevDataRef = useRef<TParams | undefined>(undefined);

//   const mutation = useMutation<TData, unknown, TParams>({
//     mutationKey: key,

//     mutationFn: async (body: TParams) => apiFunc(body),

//     onSuccess: (resp) => {
//       queryClient.invalidateQueries({ queryKey: key });
//       onSuccess?.(resp);
//     },

//     onError: (err) => {
//       onError?.(err);
//     },
//   });

//   useEffect(() => {
//     if (!runOnMount) return;
//     if (funcData == null) return; // undefined or null ignore

//     const prev = prevDataRef.current;
//     if (JSON.stringify(prev) === JSON.stringify(funcData)) return;

//     prevDataRef.current = funcData;

//     mutation.mutate(funcData);
//   }, [funcData, runOnMount]);

//   return mutation;
// }
