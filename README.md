# **Manual de Construcción y Configuración**

## **Contenido**   
- [Tablas de configuraciones](#idTBConf)
- [Topología 1](#idTopo1)
- [Topología 2](#idTopo2)
- [Topología 3](#idTopo3)
- [Configuración VPN ](#idVPN)

## **Tabla de configuraciones**<a name="idTBConf"></a>
|    DISPOSITIVO    	| VLAN 	|   DIRECCION IP  	|  MASCARA DE RED 	|     GATEWAY     	|
|:-----------------:	|:----:	|:---------------:	|:---------------:	|:---------------:	|
|      ADMIN 1      	|  10  	|  192.168.126.2  	| 255.255.255.192 	|  192.168.126.1  	|
|      ADMIN 2      	|  10  	|  192.168.126.3  	| 255.255.255.192 	|  192.168.126.1  	|
|    PC1 (CONTA1)   	|  20  	|  192.168.126.66 	| 255.255.255.192 	|  192.168.126.65 	|
|    PC2 (CONTA2)   	|  20  	|  192.168.126.67 	| 255.255.255.192 	|  192.168.126.65 	|
|      WEBCONTA     	|  20  	|  192.168.126.68 	| 255.255.255.192 	|  192.168.126.65 	|
|   PC3 (VENTAS1)   	|  30  	| 192.168.126.130 	| 255.255.255.192 	| 192.168.126.129 	|
|   PC4 (VENTAS2)   	|  30  	| 192.168.126.131 	| 255.255.255.192 	| 192.168.126.129 	|
|      WEBPAGE      	|  30  	| 192.168.126.132 	| 255.255.255.192 	| 192.168.126.129 	|
| PC5 (INFORMATICA) 	|  30  	| 192.168.126.133 	| 255.255.255.192 	| 192.168.126.129 	|
|         BD        	|  30  	| 192.168.126.134 	| 255.255.255.192 	| 192.168.126.129 	|

## **Tabla de configuraciones de la nube**
| TOPOLOGIA |     LOCAL PORT     	|  REMOTE HOST	|   REMOTE PORT  	|
|:-------:	|:-------------------:	|:-----------:	|:---------------:	|
|    1   	|         3223      	|    10.8.0.2  	|       3550     	|
|    2   	|         3550      	|    10.8.0.4   |       3223    	| 
|    2   	|         5671      	|    10.8.0.2   |       3525    	| 
|    2   	|         3525      	|    10.8.0.3   |       5671    	| 

## **Topología 1**<a name="idTopo1"></a>

## **Topología 2**<a name="idTopo2"></a>

## **Topología 3**<a name="idTopo3"></a>

## **Configuración VPN**<a name="idVPN"></a>