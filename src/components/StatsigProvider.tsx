"use client"
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import { ReactNode } from 'react';

export default function ({ children }: { children: ReactNode }) {
  const { client } = useClientAsyncInit(
    import.meta.env.PUBLIC_STATSIG_CLIENT_KEY,
    { userID: 'a-user' },
    { plugins: [new StatsigSessionReplayPlugin()] },
  );

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      {children}
    </StatsigProvider>
  );
}
