export class ColorPalette {
  static BEIGE_E6D0B2: string = '#E6D0B2';
  static BEIGE_FEF9EB: string = '#FEF9EB';
  static BEIGE_FFFCF4: string = '#FFFCF4';
  static BEIGE_F8EAC5: string = '#F8EAC5';

  static BLACK: string = '#000';
  static BLACK_1A1A1A: string = '#1A1A1A';
  static BLACK_191919: string = '#191919';

  static BLUE_37B9FF: string = '#37B9FF';
  static BLUE_1778FF: string = '#1778FF';
  static BLUE_0D9FED: string = '#0D9FED';
  static BLUE_004EBB: string = '#004EBB';
  static BLUE_A7DBF7: string = '#A7DBF7';
  static BLUE_9AC1F7: string = '#9AC1F7';
  static BLUE_80BAD9: string = '#80BAD9';

  static BROWN_3D1F04: string = '#3D1F04';
  static BROWN_663D00: string = '#663D00';
  static BROWN_93653B: string = '#93653B';
  static BROWN_673C15: string = '#673C15';
  static BROWN_6B4119: string = '#6B4119';

  static GRAY_333: string = '#333';
  static GRAY_666: string = '#666';
  static GRAY_888: string = '#888';
  static GRAY_AAA: string = '#aaa';
  static GRAY_BBB: string = '#bbb';
  static GRAY_CCC: string = '#ccc';
  static GRAY_EEE: string = '#eee';
  static GRAY_DDD: string = '#ddd';

  static GREEN_135E00: string = '#135E00';
  static GREEN_8ECC40: string = '#8ECC40';
  static GREEN_8ED331: string = '#8ed331';
  static GREEN_1F9B00: string = '#1F9B00';
  static GREEN_73C201: string = '#73C201';
  static GREEN_CAE3AB: string = '#CAE3AB';
  static GREEN_3B7705: string = '#3B7705';
  static GREEN_9DCF01: string = '#9DCF01';
  static GREEN_C6EA9A: string = '#C6EA9A';

  static ORANGE_EEBF85: string = '#EEBF85';
  static ORANGE_FFF3D3: string = '#FFF3D3';
  static ORANGE_FFC219: string = '#FFC219';
  static ORANGE_FCB123: string = '#FCB123';
  static ORANGE_F87B08: string = '#F87B08';
  static ORANGE_FB9700: string = '#FB9700';
  static ORANGE_FFEBC5: string = '#FFEBC5';
  static ORANGE_E18C10: string = '#E18C10';
  static ORANGE_F7BF2E: string = '#F7BF2E';
  static ORANGE_F69D03: string = '#F69D03';

  static RED_E62E49: string = '#E62E49';

  static WHITE: string = '#FFFFFF';

  static YELLOW_FBCC00: string = '#FBCC00';

  static BLACK_DIM: string = 'rgba(255, 255, 255, 0.8)';
  static WHITE_DIM: string = 'rgba(0, 0, 0, 0.5)';

  static BOX_SHADOW: string = `rgba(209, 170, 135, 0.2)`;
}

export const getSemesterBgColor = ($semester: string) => {
  switch ($semester) {
    case '3-1':
    case '3-2':
      return `#F69D03`;
    case '4-1':
    case '4-2':
      return `#1F9B00`;
    case '5-1':
    case '5-2':
      return `#1778FF`;
    case '6-1':
    case '6-2':
      return `color:#E62E49`;
    default:
      return `color: #000000;`;
  }
};

export const getPassFailColor = ($result: string) => {
  switch ($result) {
    case 'PASS':
      return `#1778FF`;
    case 'FAIL':
      return `#E62E49`;
    default:
      return `color: #000000;`;
  }
};
