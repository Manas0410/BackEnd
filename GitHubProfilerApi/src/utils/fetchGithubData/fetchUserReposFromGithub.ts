import axios, { AxiosResponse } from "axios";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
  };
  description: string | null;
  visibility: string;
}

interface RawRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
  };
  description: string | null;
  visibility: string;
}

const transformToRepositoryFormat = (rawRepo: RawRepository): Repository => {
  return {
    id: rawRepo.id,
    name: rawRepo.name,
    full_name: rawRepo.full_name,
    private: rawRepo.private,
    owner: {
      login: rawRepo.owner.login,
      id: rawRepo.owner.id,
    },
    description: rawRepo.description,
    visibility: rawRepo.visibility,
  };
};

const fetchUserRepos = async (
  username: string
): Promise<Repository[][] | false> => {
  try {
    console.log(username, "user123");
    const response: AxiosResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    console.log(response, "axiosresponse");

    const responseData: RawRepository[] = response.data;

    const groupedRepos: Repository[][] = [];
    let group: Repository[] = [];

    responseData.forEach((rawRepo, index) => {
      const repo = transformToRepositoryFormat(rawRepo);
      group.push(repo);

      if (index === responseData.length - 1) {
        groupedRepos.push(group);
        group = []; // Reset group
      }
    });

    return groupedRepos;
  } catch (error: any) {
    console.log("Error fetching user repositories:", error);
    return false;
  }
};

export default fetchUserRepos;
