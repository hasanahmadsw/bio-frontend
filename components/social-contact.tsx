import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { socialData as SocialMedia } from "../utils/data";
import { IcoButton } from "./icon-button";
export const SocialContact = () => {
  return (
    <Stack spacing={2} direction="row">
      {SocialMedia.facebook ? (
        <IcoButton href={SocialMedia.facebook}>
          <Facebook sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}

      {SocialMedia.instagram ? (
        <IcoButton href={SocialMedia.instagram}>
          <Instagram sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {SocialMedia.github ? (
        <IcoButton href={SocialMedia.github}>
          <GitHub sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {SocialMedia.linkedin ? (
        <IcoButton href={SocialMedia.linkedin}>
          <LinkedIn sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {SocialMedia.telegtam ? (
        <IcoButton href={SocialMedia.telegtam}>
          <Telegram sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
    </Stack>
  );
};
