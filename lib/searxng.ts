import { serverEnv } from '@/env/server';
import axios from 'axios';

export const searchSearxng = async (
  query: string,
) => {
  const searxngURL = serverEnv.SEARXNG_URL;

  const url = new URL(`${searxngURL}/search?format=json&categories=general`);

  url.searchParams.append('q', query);

  const res = await axios.get(url.toString());

  return res.data;

};
