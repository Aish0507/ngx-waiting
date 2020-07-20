export const WAITING_ICONS = {
  'ball-8bits': 16,
  'ball-atom': 4,
  'ball-beat': 3,
  'ball-circus': 5,
  'ball-climbing-dot': 4,
  'ball-clip-rotate': 1,
  'ball-clip-rotate-multiple': 2,
  'ball-clip-rotate-pulse': 2,
  'ball-elastic-dots': 5,
  'ball-fall': 3,
  'ball-fussion': 4,
  'ball-grid-beat': 9,
  'ball-grid-pulse': 9,
  'ball-newton-cradle': 4,
  'ball-pulse': 3,
  'ball-pulse-rise': 5,
  'ball-pulse-sync': 3,
  'ball-rotate': 1,
  'ball-running-dots': 5,
  'ball-scale': 1,
  'ball-scale-multiple': 3,
  'ball-scale-pulse': 2,
  'ball-scale-ripple': 1,
  'ball-scale-ripple-multiple': 3,
  'ball-spin': 8,
  'ball-spin-clockwise': 8,
  'ball-spin-clockwise-fade': 8,
  'ball-spin-clockwise-fade-rotating': 8,
  'ball-spin-fade': 8,
  'ball-spin-fade-rotating': 8,
  'ball-spin-rotate': 2,
  'ball-square-clockwise-spin': 8,
  'ball-square-spin': 8,
  'ball-triangle-path': 3,
  'ball-zig-zag': 2,
  'ball-zig-zag-deflect': 2,
  cog: 1,
  'cube-transition': 2,
  fire: 3,
  'line-scale': 5,
  'line-scale-party': 5,
  'line-scale-pulse-out': 5,
  'line-scale-pulse-out-rapid': 5,
  'line-spin-clockwise-fade': 8,
  'line-spin-clockwise-fade-rotating': 8,
  'line-spin-fade': 8,
  'line-spin-fade-rotating': 8,
  pacman: 6,
  'square-jelly-box': 2,
  'square-loader': 1,
  'square-spin': 1,
  timer: 1,
  'triangle-skew-spin': 1,
};

export const DEFAULTS = {
  BG_COLOR: 'rgba(51,51,51,0.8)',
  WAITING_COLOR: '#fff',
  WAITING_TYPE: 'ball-scale-multiple',
  Z_INDEX: 99999,
};

export const PRIMARY_WAITING = 'primary';

export type Size = 'default' | 'small' | 'medium' | 'large';

export interface Waiting {
  bgColor?: string;
  size?: Size;
  color?: string;
  type?: string;
  fullscreen?: boolean;
  zIndex?: number;
  template?: string;
}

export class NgxWaiting {
  name: string;
  bgColor: string;
  size: Size;
  color: string;
  type: string;
  class: string;
  iconEleCnt: number;
  iconEleArray: Array<number>;
  fullscreen: boolean;
  show: boolean;
  zIndex: number;
  template: string;

  constructor(init?: Partial<NgxWaiting>) {
    Object.assign(this, init);
  }
}
