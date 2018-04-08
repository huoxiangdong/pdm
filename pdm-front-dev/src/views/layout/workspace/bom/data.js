export default {
    main_row: [ // row
        {
          layer: 10,
          process: 'INSULATE',
          thickness: 0.010,
          diameter: 0.050,
          weight: 5.950,
          cost: 16.19,
          task: 'Primary_Extrusion',
          machine: 5555103,
          setuptime:0.037,
          runtime:0.033
        },
        {
          layer: 10,
          process: 'INSULATE',
          thickness: 0.010,
          diameter: 0.050,
          weight: 5.950,
          cost: 16.19,
          task: 'Primary_Extrusion',
          machine: 5555103,
          setuptime:0.037,
          runtime:0.033
        }
      ],
      main_columns: [       // 列
        { label: '工序号', prop: 'layer',width: 60,resizable:false},
        { label: '工序', prop: 'process',width: 140,resizable:false },
        { label: '厚度', prop: 'thickness',width: 60,resizable:false },
        { label: '直径', prop: 'diameter',width: 60,resizable:false },
        { label: '重量', prop: 'weight',width: 60,resizable:false },
        { label: '价格', prop: 'cost',width: 80,resizable:false },
        { label: '工艺', prop: 'task',width: 180,resizable:false},
        { label: '设备', prop: 'machine',width: 80,resizable:false},
        { label: '启动时间', prop: 'setuptime',width: 80,resizable:false },
        { label: '运行时间', prop: 'runtime',width: 80,resizable:false },
        { label: '备', prop: 'spare',width: 80,resizable:false },
      ],
      material_columns: [
        { label: 'APEX-XXX01', prop: '',width: 140,resizable:false },
        { label: '方位', prop: 'position',width: 60,resizable:false },
        { label: '物料', prop: 'design',width: 120,resizable:false },
        { label: '描述', prop: 'description',width: 260,resizable:false },
        { label: '直径', prop: 'diameter',width: 80,resizable:false },
        { label: '数量', prop: 'quantity',width: 80,resizable:false },
        { label: '组数', prop: 'diameter',width: 80,resizable:false },
        { label: '损耗率', prop: 'quantity',width: 80,resizable:false }, 
        
      ],
      material_row: [ // row
        {
          position: 10,
          design: '011582 NC047',
          description: '22AWG 7/30 TC X .75',
          diameter: 0.03,
          quantity: 4.36387
        },
        {
            position: 20,
            design: '031050L NA047',
            description: 'COMP,SR-PVC 105C APEX 8086 LF',
            diameter: 0,
            quantity: 1.58654
          }
      ],
}