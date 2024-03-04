// 'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';
  
  const users = [
    {
      id: '1',
      name: 'John Albert',
      email: 'live@gmail.com',
      git: 'Jony best'  
    },
    {
      id: '2',
      name: 'Pirsen Doe',
      email: 'Cormi@proton.it',
      git: 'On the rocks of sinara'  
    },
    {
      id: '3',
      name: 'Lorten Doe',
      email: 'LodeLoreten@yirify.es',
      git: 'Not having'  
    }
  ];
  
  export default function Example() {
    return (
      <>
        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
          <div>
            <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Workspaces
            </h3>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Overview of all registered workspaces within your organization.
            </p>
          </div>
          <button
            type="button"
            className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
          >
            Add workspace
          </button>
        </div>
        <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Workspace
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Owner
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Status
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Region
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Capacity
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Costs
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Last edited
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.git}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }