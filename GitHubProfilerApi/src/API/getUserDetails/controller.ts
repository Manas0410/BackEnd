import { Request, Response } from "express";
import UserModel from "../../Schemas/userDataSchema";
import { fetchUserProfile } from "../../utils/fetchGithubData/fetchUserDetailFromGithub";
import fetchUserRepos from "../../utils/fetchGithubData/fetchUserReposFromGithub";
import RepositoryModel from "../../Schemas/userReposSchema";
import { runMongoQuery } from "./query";

const Controller = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const { userName }: { userName: string } = req.params;

    const isDataPresent = await UserModel.find({ login: userName });

    if (isDataPresent.length > 0) {
      // retrieve and send data from mongo
      const dataFromMongo = await runMongoQuery(userName);

      res.status(200).json(dataFromMongo);
    } else {
      // retrieve and send data from github
      const userData = await fetchUserProfile(userName);
      const repositoryData = await fetchUserRepos(userName);

      if (!userData || !repositoryData) {
        res.status(400).send("Provided username is not valid");
        return;
      }

      const user = new UserModel(userData);
      await user.save();

      repositoryData.map(async (repo) => {
        const repos = new RepositoryModel(repo);
        await repos.save();
      });

      const dataFromMongo = await runMongoQuery(userName);
      res.status(200).json(dataFromMongo);
    }
  } catch (err) {
    console.log(err, "controller error");
  }
};

export default Controller;
