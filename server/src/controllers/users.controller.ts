import { Request, Response } from 'express';
import { config } from '../config/default';
import axios from 'axios';

const usersController = {
  async infoAboutMe(req: Request, res: Response) {
    const url = config.osuApiUrl + 'api/v2/me/osu';
    const token = req.token;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      res.json({
        meta: {
          success: true,
        },
        result: response.data,
      });
    } catch (err) {
      res.status(500).json({
        meta: {
          success: false,
        },
        result: err,
      });
    }
  },
};

export { usersController };
