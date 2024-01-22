import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Calendar2 } from "../models/calendar2.model.js";

const calendar2Entry = asyncHandler(async (req, res) => {
    //getting data from req.body
    const { days, shiftTime } = req.body;
    console.log("days:", days);
  
    const dayDetails = await Calendar2.create({
      days,
      shiftTime,
    });
    return res
      .status(201)
      .json(new ApiResponse(200, dayDetails, "Day details created successfully"));
  });


  export {calendar2Entry}