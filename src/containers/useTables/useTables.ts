import { useQuery } from '@tanstack/react-query';

export const useTables = ({
  queryKey,
  queryFn,
}: {
  queryKey: string[];
  queryFn: () => Promise<string | null>;
}) => {
  const { data, isFetching } = useQuery<string | null, Error>({
    queryKey,
    queryFn,
  });

  return {
    data,
    isFetching,
  };
};
