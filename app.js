const orders=[{id:1042,client:'Marina Costa',status:'Pago',cents:39970},{id:1043,client:'Rafael Lima',status:'Pendente',cents:7990},{id:1044,client:'Ana Souza',status:'Pago',cents:15990},{id:1045,client:'João Alves',status:'Cancelado',cents:8500}];
const money=cents=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
function filterOrders(data,query,status){return data.filter(o=>(!status||o.status===status)&&`${o.id} ${o.client}`.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')));}
if(typeof module!=='undefined')module.exports={filterOrders};
if(typeof document!=='undefined'){
const el=id=>document.getElementById(id);
const selected=()=>filterOrders(orders,el('search').value,el('status').value);
function render(){const items=selected();el('rows').replaceChildren();for(const order of items){const tr=document.createElement('tr');for(const value of [order.id,order.client,order.status,money(order.cents)]){const td=document.createElement('td');td.textContent=value;tr.append(td);}el('rows').append(tr);}el('count').textContent=items.length;el('pending').textContent=items.filter(o=>o.status==='Pendente').length;el('revenue').textContent=money(items.filter(o=>o.status==='Pago').reduce((n,o)=>n+o.cents,0));el('feedback').textContent=items.length?`${items.length} pedidos encontrados`:'Nenhum pedido encontrado. Ajuste os filtros.';}
el('search').addEventListener('input',render);el('status').addEventListener('change',render);
el('export').addEventListener('click',()=>{const rows=[['pedido','cliente','situacao','centavos'],...selected().map(o=>[o.id,o.client,o.status,o.cents])];const csv=rows.map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n');const url=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='pedidos.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});render();}
