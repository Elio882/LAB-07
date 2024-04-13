export const WrapperList = props =>{
    const { children } = props
    return(
        <div>
            <h2>
                lista de compras
            </h2>
            <div>
                {children}
            </div>
        </div>
    )
}