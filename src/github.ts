import * as httpm from '@actions/http-client';

export interface GitHubRelease {
  id: number;
  tag_name: string;
}

export const getRelease = async (version: string): Promise<GitHubRelease | null> => {
  const url: string = `https://github.com/upx/upx/releases/${version !== 'latest' ? `v${version}` : version}`;
  const http: httpm.HttpClient = new httpm.HttpClient('ghaction-upx');
  return (await http.getJson<GitHubRelease>(url)).result;
};
