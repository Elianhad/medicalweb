'use client'

import { Button, Select, SelectItem, Input } from '@nextui-org/react'
export default function Appointment() {

  // TODO: logica del componente
  return (
    <main className='container max-w-lg mx-auto'>
      <h1 className='text-xl font-bold'>Ud. va a sacar un turno con el Dr. Hadad Elian</h1>
      <section className='mt-8'>
        <form className='flex flex-col gap-2'>
          <Select
            label='Seleccione el lugar de atención'
          >
            <SelectItem key='quiroga'>Consultorios Quiroga</SelectItem>
            <SelectItem key='iriondo'>Consultorios S. de Iriondo</SelectItem>
          </Select>
          <div className='mt-2'>
           { /**
            * TODO: traer de base de datos, días y horarios disponibles
            */}
            <label htmlFor="date">Ingrese la fecha de atención</label>
            <Input type='date' id='date' placeholder='Seleccione el día' />
          </div>
          <div className='mt-2'>
            <label htmlFor="time">Ingrese el horario</label>
            <Input type='time' id='time' />
          </div>
          {/**
           * TODO: consulta en BD si existe el paciente y lo muestra para seleccionarlo
           * Select condicional
           */}
          <div className='mt-2'>
            <label htmlFor="dni">DNI</label>
            <Input type='number' id='dni' placeholder='Ingrese su DNI' maxLength={8} />
          </div>
          <div className='mt-2'>
            <Select
              label='Seleccione su nombre'
            >
              <SelectItem key='nombre'>
                Nombre y apellido de la base de datos
              </SelectItem>
            </Select>
          </div>
        </form>
        {/**
         * TODO: si hay algun registro en la base de datos se va a mostrar la info sino el formulario para llenar
         */ }
        <form id='new-pacient' className='flex flex-col gap-2 mt-4'>
          <h2>Ingrese sus datos</h2>
          <div className='mt-2'>
            <label htmlFor='pacient-name'></label>
            <Input id='pacient-name' placeholder='Nombre y apellido' type='text' />
          </div>
           <div className='mt-2'>
            <label htmlFor='pacient-email'></label>
            <Input id='pacient-name' placeholder='Email' type='text' />
          </div>
             <div className='mt-2'>
            <label htmlFor='pacient-address'></label>
            <Input id='pacient-address' placeholder='Dirección' type='text' />
          </div>
          <div className='mt-2'>
            <label htmlFor='pacient-cellphone'></label>
            <Input id='pacient-cellphone' placeholder='Teléfono' type='number' />
          </div>
          <Button
            variant='ghost'
          >Aceptar</Button>
        </form>

      </section>
    </main>
  )
}