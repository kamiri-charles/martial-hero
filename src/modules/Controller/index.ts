import Player from "../Player";
import { player_states } from "../Player/player_states";

export default class Controller {
  player: Player;
  keys_pressed: { [key: string]: boolean };

  constructor(player: Player) {
    this.player = player;
    this.keys_pressed = {};

    // Event listeners
    window.addEventListener("keydown", e => (this.keys_pressed[e.key] = true));
    window.addEventListener("keyup", e => (this.keys_pressed[e.key] = false));
  }

  // Player controls
  handle_input() {
    if (!this.player.is_jumping) {
      if (this.keys_pressed["ArrowRight"]) {
        this.player.set_state(player_states.SPRINT_RIGHT);
      } else if (this.keys_pressed["ArrowLeft"]) {
        this.player.set_state(player_states.SPRINT_LEFT);
      } else {
        // If no movement keys are pressed, set the player to idle
        if (this.player.on_ground()) {
          if (this.player.state.includes("left")) {
            this.player.set_state(player_states.IDLE_LEFT);
          } else if (this.player.state.includes("right")) {
            this.player.set_state(player_states.IDLE_RIGHT);
          }
        }
      }
    }

    // Check for jump key separately
    if (this.keys_pressed["ArrowUp"] && !this.player.is_jumping) {
      if (this.player.state.includes("left")) {
        this.player.set_state(player_states.JUMP_LEFT);
      } else if (this.player.state.includes("right")) {
        this.player.set_state(player_states.JUMP_RIGHT);
      }
    }
  }
}