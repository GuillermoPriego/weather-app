import * as React from "react";
import useSwr from "swr";
import { fetcher } from "./fetcher";

type FetchingStateProps<T> = {
  url: string;
  options?: object;
  children: (
    data: T | undefined,
    error: any,
    isLoading: boolean
  ) => React.ReactElement;
};

export function FetchingState<T>({
  url,
  options = {},
  children,
}: FetchingStateProps<T>) {
  const { data, error, isLoading } = useSwr<T>(url, fetcher, {
    ...options,
    revalidateOnFocus: false,
  });

  return children(data, error, isLoading);
}
