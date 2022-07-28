export const productItemStyles = {
    box: {
        marginRight: '50px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    boxProduct: {
        display: "flex"
    },
    boxTriangle: {
        width: "80px",
        height: "70px",
        marginLeft: "-80px",
        background:
            "linear-gradient(to top right, transparent 50%, #F8475F 50%)",
        textAlign: "end",
    },
    typoOff: {
        margin: '12px 8px 0px 0px',
        font: '900 16px Nunito, sans serif',
        color: 'primary.main'
    },
    boxData: {
        textAlign: 'center',
        padding: '7px 20px 14px 20px',
        '&:hover': {
            backgroundColor: "#E6E8EA",
        },
    },
    typoName: {
        font: '600 12px Nunito, sans serif',
        letterSpacing: '0px',
        color: 'secondary.gray'
    },
    rating: {
        "& .MuiRating-iconFilled": {
            color: "error.main",
        },
        "& .MuiRating-iconEmpty": {
            color: "error.main",
        },
    },
    typoListPrice: {
        font: 'normal 12px Nunito, sans serif',
        letterSpacing: '0px',
        color: 'secondary.gray'
    },
    typoPrice: {
        font: 'bold 18px Nunito, sans serif',
        letterSpacing: '0px',
        color: 'secondary.main'
    },
    typoQuantity: {
        font: 'normal 11px Nunito, sans serif',
        letterSpacing: '0px',
        color: 'secondary.gray'
    },
    button: {
        height: '32px',
        width: '125px',
        marginTop: '8px',
        backgroundColor: "secondary.main",
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: "secondary.gray",
        },
    },
    typoButton: {
        font: 'bold 12px Nunito, sans serif',
        letterSpacing: '0px',
    }
};
