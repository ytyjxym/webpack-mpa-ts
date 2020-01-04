interface pageConfig {
    home:string,
    ahaha:string,
    user:string
}

type Config = Partial<pageConfig>
type ConfigArrType = Array<keyof pageConfig>
