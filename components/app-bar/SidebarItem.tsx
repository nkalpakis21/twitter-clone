import React from 'react'

interface IProps {
    title: string,
    Icon: any,
    active?: boolean,
}
export default function SidebarItem({title, Icon, active = false}: IProps) {
  return (
    <div className="flex hoverEffect xl:w-auto space-x-3 p-3 text-large text-gray-700">
        <Icon className="h-7"/>
        <span className={`${active && "font-bold"} hidden xl:inline`}>{title}</span>
    </div>
  )
}