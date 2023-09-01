import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import { uuid } from "uuidv4";
import Location from "../../model/lookup/location";
import { ILocation } from "../../interface/lookup/location";

export const addLocation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: { locationName },
    } = req;
    if (!locationName) throw Error("Location name is required");
    const location: HydratedDocument<ILocation> = new Location({
      id: uuid(),
      locationName: locationName as string,
    });
    await location.save();
    return res.send({
      status: "success",
      message: "Location added",
      data: location,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send({ status: "failed", message: err.message });
    }
    return res.status(500).send({ status: "failed", message: err });
  }
};
