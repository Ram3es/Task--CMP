import useStyles from "./styles"

const Header = () =>{
    const classes = useStyles()
 

    return <div>
        <div className={classes.div} >
            <img className={classes.photo} src="https://s3-alpha-sig.figma.com/img/6e8e/75c0/6efff296c6a7902434155bb39f362d28?Expires=1639353600&Signature=VRsrex06LDmUneV6fzC9j34gB3jwc3b3LRABK0WXG3e5wo49OIp2vbVKCD~TBREmeFyTnXvwUCupBR1DI7E3kysVx4nss7Z4k3nbOuytEum~8pNaL35Vw2SjrCXdXT2GU~UBheTUP3vZtEcu2F58CfcR8RzWSOw~EKJdn9OK5ncSFchAqRTANXxW85vM0NeA6QPUdoZWFN4ALC89z7EEXQuQXGzAkJKJhwukT37YZf55k1VXAwIARrqNR~YrJA5Lo7jJaPK9ju3c5XAqk6XAxiSkvYjhsPijvdaD3zByS8oLke29zy31LbgPIFABA6CcjLa4OGaCGrdNdySA--AmpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo"/>
             <h1>STATISTIC</h1>  
        </div>
    </div>
}

export default Header