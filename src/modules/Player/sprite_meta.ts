import IdleSprite from "../../assets/sprites/Idle.png";
import RunSprite from "../../assets/sprites/Run.png";
import JumpSprite from "../../assets/sprites/Jump.png";

export const player_sprites = {
  IDLE: {
    name: "IDLE",
    image: IdleSprite,
    frames: 8,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
    last_frame: 1520,
  },
  
  SPRINT: {
    name: "SPRINT",
    image: RunSprite,
    frames: 8,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
    last_frame: 1520,
  },
  JUMP: {
    name: "JUMP",
    image: JumpSprite,
    frames: 2,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
    last_frame: 1520,
  },
};

