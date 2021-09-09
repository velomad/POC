import React from 'react';
import { Inject, ScheduleComponent,Day,Week,WorkWeek,Month,TimelineViews, TimelineMonth,Agenda,DragAndDrop, ViewsDirective, ViewDirective,  Resize} from '@syncfusion/ej2-react-schedule';

class SyncSchedular extends React.Component {
  render() {
    return <ScheduleComponent height='550px' width='100%'>
    <ViewsDirective>
    <ViewDirective option='Day'/>
    <ViewDirective option='Week'/>
    <ViewDirective option='WorkWeek'/>
    <ViewDirective option='Month'/>
    <ViewDirective option='Agenda'/>
    </ViewsDirective>
    <Inject services={[Day,Week,WorkWeek,Month,Agenda,TimelineViews, TimelineMonth, DragAndDrop,Resize]} />
    </ScheduleComponent>
  }
}

export default SyncSchedular;