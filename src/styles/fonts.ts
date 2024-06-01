export const defaultFontFamilyName: string = 'NanumSquareRound';

export enum FontType {
  BASE,
  INFO,
  TITLE_SUB,
  M_BOX_COMMENT,
}

export const getFontType = (type: FontType) => {
  switch (type) {
    case FontType.BASE:
      return `
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 1.5;
      `;
    case FontType.INFO:
      return `
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5;
      `;

    case FontType.TITLE_SUB:
      return `
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5;
      `;
    case FontType.M_BOX_COMMENT:
      return `
        font-weight: 600;
        font-size: 1.875rem;
        line-height: 1.5;
      `;
  }
};

export enum FontRem {
  font8,
  font10,
  font12,
  font14,
  font15,
  font16,
  font18,
  font20,
  font22,
  font24,
  font25,
  font26,
  font28,
  font30,
  font32,
  font35,
  font36,
  font40,
  font40vw,
  font42,
  font44,
  font48,
  font50,
  font57,
}

export const getFontRem = (type: FontRem) => {
  switch (type) {
    case FontRem.font8:
      return `font-size: 0.5rem;`;
    case FontRem.font10:
      return `font-size: 0.625rem;`;
    case FontRem.font12:
      return `font-size: 0.75rem;`;
    case FontRem.font14:
      return `font-size: 0.875rem;`;
    case FontRem.font15:
      return `font-size: 0.938rem;`;
    case FontRem.font18:
      return `font-size: 1.125rem;`;
    case FontRem.font20:
      return `font-size: 1.25rem;`;
    case FontRem.font22:
      return `font-size: 1.375rem;`;
    case FontRem.font24:
      return `font-size: 1.5rem;`;
    case FontRem.font25:
      return `font-size: 1.563rem;`;
    case FontRem.font26:
      return `font-size: 1.625rem;`;
    case FontRem.font28:
      return `font-size: 1.75rem;`;
    case FontRem.font30:
      return `font-size: 1.875rem;`;
    case FontRem.font32:
      return `font-size: 2rem;`;
    case FontRem.font35:
      return `font-size: 2.188rem;`;
    case FontRem.font36:
      return `font-size: 2.25rem;`;
    case FontRem.font40:
      return `font-size: 2.5rem;`;
    case FontRem.font40vw:
      return `font-size: 2.0833vw;`;
    case FontRem.font42:
      return `font-size: 2.625rem;`;
    case FontRem.font44:
      return `font-size: 2.75rem;`;
    case FontRem.font48:
      return `font-size: 3rem;`;
    case FontRem.font50:
      return `font-size: 3.125rem;`;
    case FontRem.font57:
      return `font-size: 3.563rem;`;
    default:
      return `font-size: 1rem;`;
  }
};
