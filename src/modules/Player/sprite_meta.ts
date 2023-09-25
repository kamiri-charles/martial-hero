import IdleSprite from "../../assets/sprites/Idle.png";
import RunSprite from "../../assets/sprites/Run.png";
import JumpSprite from "../../assets/sprites/Jump.png";
import FallSprite from "../../assets/sprites/Fall.png";
import Attack1Sprite from "../../assets/sprites/Attack1.png";
import Attack2Sprite from "../../assets/sprites/Attack2.png";

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

  ATTACK_1: {
    name: "ATTACK_1",
    image: Attack1Sprite,
    frames: 6,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
  },

  ATTACK_2: {
    name: "ATTACK_1",
    image: Attack2Sprite,
    frames: 6,
    x_offset: 200,
    y_offset: 68,
    first_frame: 70,
  },
};

