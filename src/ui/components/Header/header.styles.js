export const headerStyles = {
    gridContainer: {
        height: { xs: "125px", md: "80px" },
        paddingTop: { xs: "10px 0px 20px 0px", md: "16px 0px 23px 0px" },
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottom: "1px solid #000000",
        backgroundColor: 'primary.main',
        position: 'fixed',
        top: '0',
        zIndex: 1
    },
    gridMobile: {
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    boxLogo: {
        height: { xs: "28px", sm: '33px', md: "40px" },
    },
    icon: {
        paddingRight: "5px",
        color: "secondary.main",
    },
    typoAccount: {
        textAlign: "left",
        font: 'normal 15px/18px Nunito, sans-serif',
        letterSpacing: ' 0px',
        color: 'secondary.gray',
    },
    typoCart: {
        width: '25px',
        height: '25px',
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: '50%',
        background: '0% 0% no-repeat padding-box',
        backgroundColor: "error.main",
        font: 'bold 14px/26px Nunito, sans-serif',
        color: 'primary.main',
    }
};
