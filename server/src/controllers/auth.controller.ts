import { Request, Response } from 'express';
import { config } from '../config/default';
import axios from 'axios';

const authController = {
  async login(req: Request, res: Response) {
    const code = req.body.code;
    const url = config.osuApiUrl + 'oauth/token';

    try {
      const response = await axios.post(url, {
        grant_type: 'authorization_code',
        client_id: config.osuClientId,
        client_secret: config.osuClientSecret,
        redirect_uri: config.osuRedirectUri,
        code,
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

export { authController };
