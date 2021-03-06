import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
           // { path: '', redirectTo: 'dashboard' },
              {path: 'setup', loadChildren: '../showcase/components/setup/setup.module#SetupModule'},
            {path: 'theming', loadChildren: '../showcase/components/theming/theming.module#ThemingModule'},
            {path: 'accordion', loadChildren: '../showcase/components/accordion/accordiondemo.module#AccordionDemoModule'},
            {path: 'autocomplete', loadChildren: '../showcase/components/autocomplete/autocompletedemo.module#AutoCompleteDemoModule'},
            {path: 'blockui', loadChildren: '../showcase/components/blockui/blockuidemo.module#BlockUIDemoModule'},
            {path: 'breadcrumb', loadChildren: '../showcase/components/breadcrumb/breadcrumbdemo.module#BreadcrumbDemoModule'},
            {path: 'button', loadChildren: '../showcase/components/button/buttondemo.module#ButtonDemoModule'},
            {path: 'calendar', loadChildren: '../showcase/components/calendar/calendardemo.module#CalendarDemoModule'},
            {path: 'captcha', loadChildren: '../showcase/components/captcha/captchademo.module#CaptchaDemoModule'},
            {path: 'carousel', loadChildren: '../showcase/components/carousel/carouseldemo.module#CarouselDemoModule'},
            {path: 'chart', loadChildren: '../showcase/components/chart/chartdemo.module#ChartDemoModule'},
            {path: 'checkbox', loadChildren: '../showcase/components/checkbox/checkboxdemo.module#CheckboxDemoModule'},
            {path: 'chips', loadChildren: '../showcase/components/chips/chipsdemo.module#ChipsDemoModule'},
            {path: 'codehighlighter', loadChildren: '../showcase/components/codehighlighter/codehighlighterdemo.module#CodeHighlighterDemoModule'},
            {path: 'colorpicker', loadChildren: '../showcase/components/colorpicker/colorpickerdemo.module#ColorPickerDemoModule'},
            {path: 'confirmdialog', loadChildren: '../showcase/components/confirmdialog/confirmdialogdemo.module#ConfirmDialogDemoModule'},
            {path: 'contextmenu', loadChildren: '../showcase/components/contextmenu/contextmenudemo.module#ContextMenuDemoModule'},
            {path: 'datagrid', loadChildren: '../showcase/components/datagrid/datagriddemo.module#DataGridDemoModule'},
            {path: 'datalist', loadChildren: '../showcase/components/datalist/datalistdemo.module#DataListDemoModule'},
            {path: 'datascroller', loadChildren: '../showcase/components/datascroller/datascrollerdemo.module#DataScrollerDemoModule'},
            {path: 'datatable', loadChildren: '../showcase/components/datatable/datatabledemo.module#DataTableDemoModule'},
            {path: 'defer', loadChildren: '../showcase/components/defer/deferdemo.module#DeferDemoModule'},
            {path: 'dialog', loadChildren: '../showcase/components/dialog/dialogdemo.module#DialogDemoModule'},
            {path: 'dragdrop', loadChildren: '../showcase/components/dragdrop/dragdropdemo.module#DragDropDemoModule'},
            {path: 'dropdown', loadChildren: '../showcase/components/dropdown/dropdowndemo.module#DropdownDemoModule'},
            {path: 'editor', loadChildren: '../showcase/components/editor/editordemo.module#EditorDemoModule'},
            {path: 'fieldset', loadChildren: '../showcase/components/fieldset/fieldsetdemo.module#FieldsetDemoModule'},
            {path: 'fileupload', loadChildren: '../showcase/components/fileupload/fileuploaddemo.module#FileUploadDemoModule'},
            {path: 'galleria', loadChildren: '../showcase/components/galleria/galleriademo.module#GalleriaDemoModule'},
            {path: 'gmap', loadChildren: '../showcase/components/gmap/gmapdemo.module#GMapDemoModule'},
            {path: 'grid', loadChildren: '../showcase/components/grid/griddemo.module#GridDemoModule'},
            {path: 'growl', loadChildren: '../showcase/components/growl/growldemo.module#GrowlDemoModule'},
            {path: 'inplace', loadChildren: '../showcase/components/inplace/inplacedemo.module#InplaceDemoModule'},
            {path: 'inputmask', loadChildren: '../showcase/components/inputmask/inputmaskdemo.module#InputMaskDemoModule'},
            {path: 'inputswitch', loadChildren: '../showcase/components/inputswitch/inputswitchdemo.module#InputSwitchDemoModule'},
            {path: 'inputtext', loadChildren: '../showcase/components/inputtext/inputtextdemo.module#InputTextDemoModule'},
            {path: 'inputgroup', loadChildren: '../showcase/components/inputgroup/inputgroupdemo.module#InputGroupDemoModule'},
            {path: 'inputtextarea', loadChildren: '../showcase/components/inputtextarea/inputtextareademo.module#InputTextareaDemoModule'},
            {path: 'lightbox', loadChildren: '../showcase/components/lightbox/lightboxdemo.module#LightboxDemoModule'},
            {path: 'listbox', loadChildren: '../showcase/components/listbox/listboxdemo.module#ListboxDemoModule'},
            {path: 'megamenu', loadChildren: '../showcase/components/megamenu/megamenudemo.module#MegaMenuDemoModule'},
            {path: 'menu', loadChildren: '../showcase/components/menu/menudemo.module#MenuDemoModule'},
            {path: 'menubar', loadChildren: '../showcase/components/menubar/menubardemo.module#MenubarDemoModule'},
            {path: 'menumodel', loadChildren: '../showcase/components/menumodel/menumodeldemo.module#MenuModelDemoModule'},
            {path: 'messages', loadChildren: '../showcase/components/messages/messagesdemo.module#MessagesDemoModule'},
            {path: 'multiselect', loadChildren: '../showcase/components/multiselect/multiselectdemo.module#MultiSelectDemoModule'},
            {path: 'orderlist', loadChildren: '../showcase/components/orderlist/orderlistdemo.module#OrderListDemoModule'},
            {path: 'organizationchart', loadChildren: '../showcase/components/organizationchart/organizationchartdemo.module#OrganizationChartDemoModule'},
            {path: 'overlaypanel', loadChildren: '../showcase/components/overlaypanel/overlaypaneldemo.module#OverlayPanelDemoModule'},
            {path: 'paginator', loadChildren: '../showcase/components/paginator/paginatordemo.module#PaginatorDemoModule'},
            {path: 'panel', loadChildren: '../showcase/components/panel/paneldemo.module#PanelDemoModule'},
            {path: 'panelmenu', loadChildren: '../showcase/components/panelmenu/panelmenudemo.module#PanelMenuDemoModule'},
            {path: 'password', loadChildren: '../showcase/components/password/passworddemo.module#PasswordDemoModule'},
            {path: 'picklist', loadChildren: '../showcase/components/picklist/picklistdemo.module#PickListDemoModule'},
            {path: 'progressbar', loadChildren: '../showcase/components/progressbar/progressbardemo.module#ProgressBarDemoModule'},
            {path: 'progressspinner', loadChildren: '../showcase/components/progressspinner/progressspinnerdemo.module#ProgressSpinnerDemoModule'},
            {path: 'radiobutton', loadChildren: '../showcase/components/radiobutton/radiobuttondemo.module#RadioButtonDemoModule'},
            {path: 'rating', loadChildren: '../showcase/components/rating/ratingdemo.module#RatingDemoModule'},
            {path: 'responsive', loadChildren: '../showcase/components/responsive/responsivedemo.module#ResponsiveDemoModule'},
            {path: 'rtl', loadChildren: '../showcase/components/rtl/rtldemo.module#RTLDemoModule'},
            {path: 'schedule', loadChildren: '../showcase/components/schedule/scheduledemo.module#ScheduleDemoModule'},
            {path: 'selectbutton', loadChildren: '../showcase/components/selectbutton/selectbuttondemo.module#SelectButtonDemoModule'},
            {path: 'sidebar', loadChildren: '../showcase/components/sidebar/sidebardemo.module#SidebarDemoModule'},
            {path: 'slidemenu', loadChildren: '../showcase/components/slidemenu/slidemenudemo.module#SlideMenuDemoModule'},
            {path: 'slider', loadChildren: '../showcase/components/slider/sliderdemo.module#SliderDemoModule'},
            {path: 'spinner', loadChildren: '../showcase/components/spinner/spinnerdemo.module#SpinnerDemoModule'},
            {path: 'splitbutton', loadChildren: '../showcase/components/splitbutton/splitbuttondemo.module#SplitButtonDemoModule'},
            {path: 'steps', loadChildren: '../showcase/components/steps/stepsdemo.module#StepsDemoModule'},
            {path: 'support', loadChildren: '../showcase/components/support/support.module#SupportModule'},
            {path: 'tabmenu', loadChildren: '../showcase/components/tabmenu/tabmenudemo.module#TabMenuDemoModule'},
            {path: 'tabview', loadChildren: '../showcase/components/tabview/tabviewdemo.module#TabViewDemoModule'},
            {path: 'terminal', loadChildren: '../showcase/components/terminal/terminaldemo.module#TerminalDemoModule'},
            {path: 'tieredmenu', loadChildren: '../showcase/components/tieredmenu/tieredmenudemo.module#TieredMenuDemoModule'},
            {path: 'togglebutton', loadChildren: '../showcase/components/togglebutton/togglebuttondemo.module#ToggleButtonDemoModule'},
            {path: 'toolbar', loadChildren: '../showcase/components/toolbar/toolbardemo.module#ToolbarDemoModule'},
            {path: 'tooltip', loadChildren: '../showcase/components/tooltip/tooltipdemo.module#TooltipDemoModule'},
            {path: 'tree', loadChildren: '../showcase/components/tree/treedemo.module#TreeDemoModule'},
            {path: 'treetable', loadChildren: '../showcase/components/treetable/treetabledemo.module#TreeTableDemoModule'},
            {path: 'tristatecheckbox', loadChildren: '../showcase/components/tristatecheckbox/tristatecheckboxdemo.module#TriStateCheckboxDemoModule'},
            {path: 'validation', loadChildren: '../showcase/components/validation/validationdemo.module#ValidationDemoModule'}
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
