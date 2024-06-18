
; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.23.rc1.el6_5.1 <<>> @192.12.94.30 ns8036.hostgator.com
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26625
;; flags: qr rd; QUERY: 1, ANSWER: 0, AUTHORITY: 4, ADDITIONAL: 4
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;ns8036.hostgator.com.		IN	A

;; AUTHORITY SECTION:
hostgator.com.		172800	IN	NS	ns1.p13.dynect.net.
hostgator.com.		172800	IN	NS	ns3.p13.dynect.net.
hostgator.com.		172800	IN	NS	ns2.p13.dynect.net.
hostgator.com.		172800	IN	NS	ns4.p13.dynect.net.

;; ADDITIONAL SECTION:
ns1.p13.dynect.net.	172800	IN	A	208.78.70.13
ns3.p13.dynect.net.	172800	IN	A	208.78.71.13
ns2.p13.dynect.net.	172800	IN	A	204.13.250.13
ns4.p13.dynect.net.	172800	IN	A	204.13.251.13

;; Query time: 147 msec
;; SERVER: 192.12.94.30#53(192.12.94.30)
;; WHEN: Sat Nov  8 14:53:18 2014
;; MSG SIZE  rcvd: 188

