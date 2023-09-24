import { player_states } from './player_states';
import { player_sprites } from './sprite_meta';


export default class Player {
	canvas: HTMLCanvasElement;
	mov_x: number;
	sprite: HTMLImageElement;
	sprite_width: number;
	sprite_height: number;
	width: number;
	height: number;
	x: number;
	y: number;
	frame: number;
	frame_speed: number;
	counter: number;
	speed: number;
	state: string;
	jump_height: number;
	jump_offset: number;
	j_offset: number;
	is_jumping: boolean;
	gravity: number;
	current_sprite: {
		name: string;
		image: string;
		frames: number;
		x_offset: number;
		y_offset: number;
		first_frame: number;
	};
	horizontal_jump_speed: number;
	
	
	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.state = player_states.IDLE_RIGHT;
		this.counter = 0;
		this.mov_x = 0;
		
		// Sprite animation variables
		this.current_sprite = player_sprites["IDLE"];
		this.sprite = new Image();
		this.sprite.src = this.current_sprite.image;
		this.frame = this.current_sprite.first_frame;
		this.frame_speed = 5;
		this.sprite_width = 50;
		this.sprite_height = 55;
		this.width = this.sprite_width;
		this.height = this.sprite_height;

		// Position variables
		this.x = 100;
    	this.y = this.canvas.height - this.height - 100;
		this.speed = 10;

		// Jump variables
		this.jump_height = 20;
		this.jump_offset = 10;
		this.j_offset = 10; // Should be equal to jump_offset
		this.is_jumping = false;
		this.gravity = 1;
		this.horizontal_jump_speed = 1;
		
	}
	
	set_state(state: string) {
		this.state = state;
	};

	on_ground() {
		return this.y >= this.canvas.height - this.height - 100;
	}

	_jump() {
		this.speed = 7;
		if (this.on_ground) {
			this.is_jumping = true;
		}
	}
	
	draw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.strokeStyle = "black";
		
		// Set the player's sprite and horizontal movement based on the current state
		switch (this.state) {
			case player_states.IDLE_RIGHT:
				this.current_sprite = player_sprites["IDLE"];
				this.mov_x = 0;
				break;

			case player_states.IDLE_LEFT:
				this.current_sprite = player_sprites["IDLE"];
				this.mov_x = 0;
				break;

			case player_states.SPRINT_RIGHT:
				this.current_sprite = player_sprites["SPRINT"];
				this.mov_x = this.speed;
				break;

			case player_states.SPRINT_LEFT:
				this.current_sprite = player_sprites["SPRINT"];
				this.mov_x = -this.speed;
				break;

			case player_states.JUMP_RIGHT:
				this.current_sprite = player_sprites["JUMP"];
				this.mov_x = this.speed * this.horizontal_jump_speed;
				this._jump();
				break;

			case player_states.JUMP_LEFT:
				this.current_sprite = player_sprites["JUMP"];
				this.mov_x = -this.speed * this.horizontal_jump_speed;
				this._jump();
				break;

			case player_states.FALL_RIGHT:
				this.current_sprite = player_sprites["FALL"];
				this.mov_x = this.speed * this.horizontal_jump_speed;
				break;

			case player_states.FALL_LEFT:
				this.current_sprite = player_sprites["FALL"];
				this.mov_x = -this.speed * this.horizontal_jump_speed;
				break;

			default:
				this.current_sprite = player_sprites["IDLE"];
		}
		
		// Check the player's facing direction and apply scaling if facing left
		if (this.state.includes("left")) {
			context.save(); // Save the current canvas state
			context.scale(-1, 1); // Flip horizontally
			const flippedX = -this.x - this.width; // Adjust the x-coordinate for flipping
			context.drawImage(this.sprite, this.frame, this.current_sprite.y_offset, this.sprite_width, this.sprite_height, flippedX, this.y, this.width, this.height);
			context.restore(); // Restore the canvas state
		} else {
			context.drawImage(this.sprite, this.frame, this.current_sprite.y_offset, this.sprite_width, this.sprite_height, this.x, this.y, this.width, this.height);
		}
		
		// Draw the player's hitbox
		//context.strokeRect(this.x, this.y, this.width, this.height);
		
		context.closePath();
	}
	
	update() {
		this.counter++;
		this.sprite.src = this.current_sprite.image;

		// Handle horizontal movement
		this.x += this.mov_x;
		if (this.counter % this.frame_speed == 0) this.frame += this.current_sprite.x_offset;
		
		//if (this.frame > this.current_sprite.last_frame) this.frame = this.current_sprite.first_frame;
		if (this.frame >= this.current_sprite.first_frame + (this.current_sprite.frames * this.current_sprite.x_offset)) this.frame = this.current_sprite.first_frame;
		
		if (!this.on_ground()) {
			this.y += this.gravity;
		}
		
		
		// Vertical movement
		if (this.is_jumping) {
			this.y -= this.jump_offset;
			this.jump_offset -= 10 / this.jump_height;

			// Set the player's state to falling if they reach the peak of their jump
			if (this.jump_offset <= 0) {
				if (this.state == player_states.JUMP_RIGHT) {
					this.set_state(player_states.FALL_RIGHT);
				}
				else if (this.state == player_states.JUMP_LEFT) {
					this.set_state(player_states.FALL_LEFT);
				}
			}
			
			if (this.jump_offset <= -this.j_offset) {
				this.is_jumping = false;
				this.jump_offset = this.j_offset;
				
				// Reset the player's state to idle if they land on the ground
				if (this.on_ground()) {
					if (this.state == player_states.FALL_RIGHT) {
						this.set_state(player_states.IDLE_RIGHT);
					}
					else if (this.state == player_states.FALL_LEFT) {
						this.set_state(player_states.IDLE_LEFT);
					}
				}
			};
		};
		
		// Surface boundaries
		if (this.y > this.canvas.height - this.height - 100) this.y = this.canvas.height - this.height - 100;
	}
}
