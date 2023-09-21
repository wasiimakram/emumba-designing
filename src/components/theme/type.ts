type BlackAndWhiteColorOptions = {
    white: string;
    background: string;
    line: string;
    placeHolder: string;
    disable: string;
    bodyText: string;
    subtitle: string;
    title: string;
    black: string;
};

type RatingColorOptions = {
    lightest: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    gradient?: string;
};

declare module '@mui/material/styles' {
    interface PaletteColorOptions {
        lightest?: string;
        lighter?: string;
        light?: string;
        main?: string;
        dark?: string;
        darker?: string;
        gradient?: string;
        contrastText?: string;
    }

    interface PaletteColor {
        lightest?: string;
        lighter?: string;
        light: string;
        main: string;
        dark: string;
        darker?: string;
        gradient?: string;
    }

    interface SimplePaletteColorOptions {
        lightest?: string;
        lighter?: string;
        light?: string;
        main: string;
        dark?: string;
        darker?: string;
        gradient?: string;
    }

    interface Pallete {
        bw: BlackAndWhiteColorOptions;
        rating: RatingColorOptions;
    }

    interface PaletteOptions {
        bw: BlackAndWhiteColorOptions;
        rating: RatingColorOptions;
    }
}

export { };
