import React from 'react';

type WidgetCardProps = {
  title: string;
  children: React.ReactNode;
};

function WidgetCard({ title, children }: WidgetCardProps) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default WidgetCard;
