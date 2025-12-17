"use client"
import { unstable_noStore as noStore, revalidatePath } from "next/cache"
import Routes from '@/data/routes'
import { Cliente, InfoPrecio, MonedasDetalle, reqBrazaletesIniciales, ReqCreateUser, ReqGastos, ReqLogin, ReqReservacion, Res, Reserva, ResGenerico, ResLogin, responseMonedaDet, Respuesta } from "@/data/Tipos"
import { redirect } from "next/navigation";
import { ReqPago } from "@/app/Components/Reservaciones/ModalPago";
import { ReqAñadirPasajeros } from "@/app/Components/Reservaciones/ModalAddPasajeros";
// import Rutas from "../../public/Rutas.json"


export async function callApi(ruta, body = {}, method = 'POST') {
  const apiToken = (localStorage.getItem('userToken'))
    if (!apiToken && ruta != Routes.auth.Login) {
    location.href = '/Login'
    throw new Error('Sin credenciales')
  }
  const response = await fetch(ruta, {
    method: method,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + apiToken
      },
    body: (method == 'POST' || method == 'PATCH') ? JSON.stringify(body) : undefined
  });
  if (!response.ok) {
    throw new Error('Error al llamar a ' + ruta);
  }

  const result:T = await response.json()
  return result
}

type Ruta = {
  Ruta: string;
  Metodo: string;
}

export function GetToken(isLogin:boolean = false) {
  const apiToken = (localStorage.getItem('userToken'))
  if (!Boolean(apiToken) && !isLogin) {
    location.href = '/Login'
    throw new Error('Sin credenciales')
  }
  return apiToken;
}

export async function Redirigir(url:string, revalidar:boolean = true){
  location.href = url
}

export async function Login(data:ReqLogin):Promise<ResLogin> {
  noStore()
  let response:any = await callApi(Routes.auth.Login, data)
  return response
}

export async function CreateReserva(data:ReqReservacion){
  noStore()
  let response:any = await callApi(Routes.reservas.Agregar, data)
  return response
}

export async function EditReserva(data:ReqReservacion){
  noStore()
  let response:any = await callApi(Routes.reservas.Editar, data)
  return response
}

export async function ReenviarWhatsapp(ID:number, telefono:string){
  noStore()
  return await callApi(Routes.reservas.Whatsapp, {id: ID, telefono: telefono})
}

export async function AgregarPrecio(data:InfoPrecio): Promise<ResGenerico>{
  noStore()
  return await callApi(Routes.configuraciones.AgregarPrecio, data)
}

export async function EditarPrecio(data:InfoPrecio){
  noStore()
  return await callApi(Routes.configuraciones.EditarPrecio, data)
}

export async function BorrarPrecio(id:number) : Promise<boolean>{
  noStore()
  return await callApi(Routes.configuraciones.BorrarPrecio + id)
}

export async function CancelarReservacion(id:number) : Promise<Respuesta>{
  noStore()
  return await callApi(Routes.reservas.Cancelar + id)
}

export async function AgregarPago(data:ReqPago){
  noStore()
  return await callApi(Routes.pagos.create, data)
}

export async function AgregarPasajeros(data:ReqAñadirPasajeros){
  noStore()
  return await callApi(Routes.reservas.AddPasajeros, data)
}

export async function CancelarPago(id:number) {
  noStore()
  return await callApi(Routes.pagos.Cancelar + '?id=' + id)
}

export async function AddMonedaDetalle(data:MonedasDetalle):Promise<responseMonedaDet> {
  noStore() 
  return await callApi(Routes.moneda.addDetalle, data)
}

export async function EditCliente(data:Cliente):Promise<any> {
  noStore() 
  return await callApi(Routes.clientes.Editar, data)
}

export async function AddUsuario(data:ReqCreateUser) {
  noStore()
  return await callApi<any>(Routes.usuarios.crear, data);
}

export async function BorrarUsuario(id:number) {
  noStore()
  return await callApi<any>(Routes.usuarios.borrar + '/' + id, {}, 'POST');
}

export async function AgregarGasto(data:ReqGastos) {
  noStore()
  return await callApi<Res>(Routes.gastos.Crear, data);
}

export async function EditarGasto(data:ReqGastos) {
  noStore()
  return await callApi<Res>(Routes.gastos.Editar, data, 'POST');
}

export async function BorrarGasto(id:number) {
  noStore()
  return await callApi<Res>(Routes.gastos.Borrar + '/' + id, {}, 'POST');
}

export async function CreateReservaDirecta(data:ReqReservacion){
  noStore()
  let response:any = await callApi(Routes.reservas.Directa, data)
  return response
}

export async function BrazaletesIniciales(data:string) {
  noStore()
  let response:any = await callApi(Routes.Brazaletes.Iniciales + data)
  return response
}

export async function BrazaletesFinales(data:string) {
  noStore()
  let response:any = await callApi(Routes.Brazaletes.Finales + data)
  return response
}