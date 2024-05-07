import { Request, Response } from "express";
import UserModel from "../../Schemas/userDataSchema";
import { fetchUserProfile } from "../../utils/fetchGithubData/fetchUserDetailFromGithub";
import fetchUserRepos from "../../utils/fetchGithubData/fetchUserReposFromGithub";
import RepositoryModel from "../../Schemas/userReposSchema";
import { runMongoQuery } from "./model";

const Controller = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const { userName }: { userName: string } = req.params;

    const isDataPresent = await UserModel.find({ login: userName });
    console.log(isDataPresent, "isdatapresent");

    if (isDataPresent.length > 0) {
      console.log("inside if");
      // retrieve and send data from mongo
      const dataFromMongo = await runMongoQuery(userName);

      res.status(200).json(dataFromMongo);
    } else {
      console.log("inside else");

      // retrieve and send data from github
      console.log(userName, "userrepo");
      const userData = await fetchUserProfile(userName);
      const repositoryData = await fetchUserRepos(userName);

      if (!userData || !repositoryData) {
        res.status(400).send("Provided username is not valid");
        return;
      }

      const user = new UserModel(userData);
      const repos = new RepositoryModel(repositoryData);

      await user.save();
      await repos.save();

      const dataFromMongo = await runMongoQuery(userName);
      res.status(200).json(dataFromMongo);
    }
  } catch (err) {
    console.log(err, "controller error");
  }
};

export default Controller;
