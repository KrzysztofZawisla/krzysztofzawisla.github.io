import { memo } from "react";
import styled from "styled-components";

const ProfilePicture = memo(styled.img`
  width: 100px;
  height: auto;
  border-radius: 7.5px;
`);

export default ProfilePicture;
