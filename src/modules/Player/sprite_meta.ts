import IdleSprite from "../../assets/sprites/Idle.png";
import RunSprite from "../../assets/sprites/Run.png";
import JumpSprite from "../../assets/sprites/Jump.png";
import FallSprite from "../../assets/sprites/Fall.png";

export const player_sprites = {
  IDLE: {
    name: "IDLE",
    image: IdleSprite,
    frames: 8,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
  },
  
  SPRINT: {
    name: "SPRINT",
    image: RunSprite,
    frames: 8,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
  },
  JUMP: {
    name: "JUMP",
    image: JumpSprite,
    frames: 2,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
  },
  FALL: {
    name: "FALL",
    image: FallSprite,
    frames: 2,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
  },
};

