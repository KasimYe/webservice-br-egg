# 弘瑞医药第三方物流服务端-长典
## ChangDian Service

*v1.0*

- ## Service Url
> 接口地址为同一个，GET为获取数据，POST为提交数据，具体方法以query参数method区分，示例如下
>>      @URI = 127.0.0.1
>>      http:{{URI}}/api/v1/changdian?method=receipt

- ## GET List
>> 1. #### 收货单
>>>     http:{{URI}}/api/v1/changdian?method=receipt
>> 2. #### 验收单
>>>     http:{{URI}}/api/v1/changdian?method=stock
>> 3. #### 购进退出单
>>>     http:{{URI}}/api/v1/changdian?method=stockreturn
>> 4. #### 出库单
>>>     http:{{URI}}/api/v1/changdian?method=sale
>> 5. #### 销售退回收货单
>>>     http:{{URI}}/api/v1/changdian?method=salereturnreceipt
>> 6. #### 销售退回验收单
>>>     http:{{URI}}/api/v1/changdian?method=salereturncheck
>> 7. #### 报损报溢单(盘点单)
>>>     http:{{URI}}/api/v1/changdian?method=inventorycheck

- ## POST List
>> 1. #### 采购合同(采购订单)
>>>     //URL
>>>     http:{{URI}}/api/v1/changdian
>>>     //post data
>>>     {
>>>       "method": "contract",
>>>       "data": {
>>>         "id": "1",
>>>         "supplier_id": "1001",
>>>         "supplier_name": "浙江康恩贝制药有限公司",
>>>         "system_date": "2020-04-09",
>>>         "sum_amount":1024.14,
>>>         "list":[{
>>>             "id":"1",
>>>             "product_id":"101",
>>>             "product_name":"葡萄糖酸锌口服液",
>>>             "mobile":"120ml",
>>>             "base_unit":"瓶",
>>>             "from_place":"浙江康恩贝制药有限公司",
>>>             "unit_rate":100,
>>>             "mid_unit_rate":20,
>>>             "pu_rate":0.16,
>>>             "number":5000,
>>>             "price":1.25,
>>>             "free_price":1.078
>>>         },
>>>         {
>>>             "id":"2",
>>>             "product_id":"102",
>>>             "product_name":"维生素C泡腾片",
>>>             "mobile":"80克(4克X12片)",
>>>             "base_unit":"盒",
>>>             "from_place":"浙江康恩贝制药有限公司",
>>>             "unit_rate":100,
>>>             "mid_unit_rate":20,
>>>             "pu_rate":0.16,
>>>             "number":5000,
>>>             "price":1.25,
>>>             "free_price":1.078
>>>         }]
>>>       }
>>>     }
>> 2. #### 销售单(出库单)
>>>     http:{{URI}}/api/v1/changdian?method=order
>> 3. #### 销售退货申请单
>>>     http:{{URI}}/api/v1/changdian?method=salereturnapply