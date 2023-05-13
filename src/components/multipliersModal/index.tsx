import { useContext, useState } from "react"
import { StyledMultipliersModal } from "./style"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { MultipliersContext, iMultipliers } from "../../contexts/multipliers"
import { yupResolver } from "@hookform/resolvers/yup"
import { ProductsContext } from "../../contexts/productsContext"

interface iModalProps {
    setShowMultipliersModal: (value: boolean) => void
}


const MultipliersModal = ({setShowMultipliersModal}: iModalProps) => {
    const [ loading, setLoading] = useState(false)
    const { multipliers, editMultipliers, recalculateProducts } = useContext(MultipliersContext)
    const { populateProducts } = useContext(ProductsContext)

    const editMultipliersFormSchema = yup.object().shape({
        multi_0_50: yup.string().max(4).optional(),
	    multi_51_150: yup.string().max(4).optional(),
	    multi_151_700: yup.string().max(4).optional(),
	    multi_701_1500: yup.string().max(4).optional(),
	    multi_1501_3000: yup.string().max(4).optional(),
	    multi_3001_6000: yup.string().max(4).optional()
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<any>({resolver: yupResolver(editMultipliersFormSchema)})

    const handleEditObj = (data: iMultipliers) => {
        let editObj: any = {}
        Object.entries(data).forEach(([key, value]) => {
            editObj[key] = parseInt(value)
        })
        editMultipliers(editObj)
    }

    const executeRecalculation = () => {
        setTimeout(() => {
            recalculateProducts()
        }, 200)
        setTimeout(() => {
            populateProducts()
            setShowMultipliersModal(false)
        }, 2000)
    }

    return (
        <StyledMultipliersModal>
            <main>
                <button className="closeModal" onClick={() => setShowMultipliersModal(false)}>X</button>
                <div>
                    <h2>Editar Multiplicadores</h2>
                </div>
                <form onSubmit={handleSubmit(handleEditObj)}>
                    <section className="inputRow">
                        <div className="inputContainer">
                            <label>0 - 50</label>
                            <div>
                                <input type="text" {...register("multi_0_50")} defaultValue={multipliers.multi_0_50}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>51 - 150</label>
                            <div>
                                <input type="text" {...register("multi_51_150")} defaultValue={multipliers.multi_51_150}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>151 - 700</label>
                            <div>
                                <input type="text" {...register("multi_151_700")} defaultValue={multipliers.multi_151_700}/>
                                <span>%</span>
                            </div>
                        </div>
                    </section>
                    <section className="inputRow">
                        <div className="inputContainer">
                            <label>701 - 1500</label>
                            <div>
                                <input type="text" {...register("multi_701_1500")} defaultValue={multipliers.multi_701_1500}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>1501 - 3000</label>
                            <div>
                                <input type="text" {...register("multi_1501_3000")} defaultValue={multipliers.multi_1501_3000}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>3001 - 6000</label>
                            <div>
                                <input type="text" {...register("multi_3001_6000")} defaultValue={multipliers.multi_3001_6000}/>
                                <span>%</span>
                            </div>
                        </div>
                    </section>
                    <button type="submit">Salvar</button>
                    { loading ? (
                        <button type="submit" className="loadingButton">Recalculando...</button>
                    ) : (
                        <button type="submit" onClick={() => {setLoading(true), executeRecalculation()}}>Salvar e recalcular</button>
                    )}
                </form>
            </main>
        </StyledMultipliersModal>
    )
}

export {MultipliersModal}

/*
    { loading ? (
        <button type="submit" className="loadingButton">Recalculando...</button>
    ) : (
        <button type="submit" onClick={() => setLoading(true)}>Salvar e recalcular</button>
    )}
*/

/*

                    <section className="inputRow">
                        <div className="inputContainer">
                            <label>0 - 50</label>
                            <div>
                                <input type="text" {...register("multi_0_50")}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>51 - 150</label>
                            <div>
                                <input type="text" {...register("multi_51_150")}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>151 - 700</label>
                            <div>
                                <input type="text" {...register("multi_151_700")}/>
                                <span>%</span>
                            </div>
                        </div>
                    </section>
                    <section className="inputRow">
                        <div className="inputContainer">
                            <label>701 - 1500</label>
                            <div>
                                <input type="text" {...register("multi_701_1500")}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>1501 - 3000</label>
                            <div>
                                <input type="text" {...register("multi_1501_3000")}/>
                                <span>%</span>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label>3001 - 6000</label>
                            <div>
                                <input type="text" {...register("multi_3001_6000")}/>
                                <span>%</span>
                            </div>
                        </div>
                    </section>

*/