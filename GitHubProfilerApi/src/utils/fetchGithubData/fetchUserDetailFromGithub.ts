import axios, { AxiosResponse } from "axios";

interface UserProfile {
  id: number;
  login: string;
  name: string;
  location?: string;
  email?: string;
  bio?: string;
  followers?: number;
  following?: number;
  repos_url?: string;
}

export const fetchUserProfile = async (
  username: string
): Promise<UserProfile | false> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const userData = response.data;

    // Map the response data to the desired format
    const userProfile: UserProfile = {
      id: userData.id,
      login: userData.login,
      name: userData.name,
      location: userData.location,
      email: userData.email,
      bio: userData.bio,
      followers: userData.followers,
      following: userData.following,
      repos_url: userData.repos_url,
    };

    return userProfile;
  } catch (error: any) {
    console.error("Error fetching user profile:", error);
    return false;
  }
};
