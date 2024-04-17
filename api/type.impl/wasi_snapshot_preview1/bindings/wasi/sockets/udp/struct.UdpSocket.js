(function() {var type_impls = {
"wasi_snapshot_preview1":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-Debug-for-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.address_family\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.address_family\" class=\"fn\">address_family</a>(&amp;self) -&gt; <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.IpAddressFamily.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::IpAddressFamily\">IpAddressFamily</a></h4></section></summary><div class=\"docblock\"><p>Whether this is a IPv4 or IPv6 socket.</p>\n<p>Equivalent to the SO_DOMAIN socket option.</p>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.local_address\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.local_address\" class=\"fn\">local_address</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.IpSocketAddress.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::IpSocketAddress\">IpSocketAddress</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Get the current bound address.</p>\n<p>POSIX mentions:</p>\n<blockquote>\n<p>If the socket has not been bound to a local name, the value\nstored in the object pointed to by <code>address</code> is unspecified.</p>\n</blockquote>\n<p>WASI is stricter and requires <code>local-address</code> to return <code>invalid-state</code> when the socket hasn’t been bound yet.</p>\n<h5 id=\"typical-errors\"><a class=\"doc-anchor\" href=\"#typical-errors\">§</a>Typical errors</h5>\n<ul>\n<li><code>invalid-state</code>: The socket is not bound to any local address.</li>\n</ul>\n<h5 id=\"references\"><a class=\"doc-anchor\" href=\"#references\">§</a>References</h5>\n<ul>\n<li><a href=\"https://pubs.opengroup.org/onlinepubs/9699919799/functions/getsockname.html\">https://pubs.opengroup.org/onlinepubs/9699919799/functions/getsockname.html</a></li>\n<li><a href=\"https://man7.org/linux/man-pages/man2/getsockname.2.html\">https://man7.org/linux/man-pages/man2/getsockname.2.html</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/windows/win32/api/winsock/nf-winsock-getsockname\">https://learn.microsoft.com/en-us/windows/win32/api/winsock/nf-winsock-getsockname</a></li>\n<li><a href=\"https://man.freebsd.org/cgi/man.cgi?getsockname\">https://man.freebsd.org/cgi/man.cgi?getsockname</a></li>\n</ul>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.receive_buffer_size\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.receive_buffer_size\" class=\"fn\">receive_buffer_size</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></summary><div class=\"docblock\"><p>The kernel buffer space reserved for sends/receives on this socket.</p>\n<p>If the provided value is 0, an <code>invalid-argument</code> error is returned.\nAny other value will never cause an error, but it might be silently clamped and/or rounded.\nI.e. after setting a value, reading the same setting back may return a different value.</p>\n<p>Equivalent to the SO_RCVBUF and SO_SNDBUF socket options.</p>\n<h5 id=\"typical-errors\"><a class=\"doc-anchor\" href=\"#typical-errors\">§</a>Typical errors</h5>\n<ul>\n<li><code>invalid-argument</code>:     (set) The provided value was 0.</li>\n</ul>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.remote_address\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.remote_address\" class=\"fn\">remote_address</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.IpSocketAddress.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::IpSocketAddress\">IpSocketAddress</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Get the address the socket is currently streaming to.</p>\n<h5 id=\"typical-errors\"><a class=\"doc-anchor\" href=\"#typical-errors\">§</a>Typical errors</h5>\n<ul>\n<li><code>invalid-state</code>: The socket is not streaming to a specific remote address. (ENOTCONN)</li>\n</ul>\n<h5 id=\"references\"><a class=\"doc-anchor\" href=\"#references\">§</a>References</h5>\n<ul>\n<li><a href=\"https://pubs.opengroup.org/onlinepubs/9699919799/functions/getpeername.html\">https://pubs.opengroup.org/onlinepubs/9699919799/functions/getpeername.html</a></li>\n<li><a href=\"https://man7.org/linux/man-pages/man2/getpeername.2.html\">https://man7.org/linux/man-pages/man2/getpeername.2.html</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/windows/win32/api/winsock/nf-winsock-getpeername\">https://learn.microsoft.com/en-us/windows/win32/api/winsock/nf-winsock-getpeername</a></li>\n<li><a href=\"https://man.freebsd.org/cgi/man.cgi?query=getpeername&amp;sektion=2&amp;n=1\">https://man.freebsd.org/cgi/man.cgi?query=getpeername&amp;sektion=2&amp;n=1</a></li>\n</ul>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_bind\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.start_bind\" class=\"fn\">start_bind</a>(\n    &amp;self,\n    network: &amp;<a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.Network.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::Network\">Network</a>,\n    local_address: <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.IpSocketAddress.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::IpSocketAddress\">IpSocketAddress</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Bind the socket to a specific network on the provided IP address and port.</p>\n<p>If the IP address is zero (<code>0.0.0.0</code> in IPv4, <code>::</code> in IPv6), it is left to the implementation to decide which\nnetwork interface(s) to bind to.\nIf the port is zero, the socket will be bound to a random free port.</p>\n<h5 id=\"typical-errors\"><a class=\"doc-anchor\" href=\"#typical-errors\">§</a>Typical errors</h5>\n<ul>\n<li><code>invalid-argument</code>:          The <code>local-address</code> has the wrong address family. (EAFNOSUPPORT, EFAULT on Windows)</li>\n<li><code>invalid-state</code>:             The socket is already bound. (EINVAL)</li>\n<li><code>address-in-use</code>:            No ephemeral ports available. (EADDRINUSE, ENOBUFS on Windows)</li>\n<li><code>address-in-use</code>:            Address is already in use. (EADDRINUSE)</li>\n<li><code>address-not-bindable</code>:      <code>local-address</code> is not an address that the <code>network</code> can bind to. (EADDRNOTAVAIL)</li>\n<li><code>not-in-progress</code>:           A <code>bind</code> operation is not in progress.</li>\n<li><code>would-block</code>:               Can’t finish the operation, it is still in progress. (EWOULDBLOCK, EAGAIN)</li>\n</ul>\n<h5 id=\"implementors-note\"><a class=\"doc-anchor\" href=\"#implementors-note\">§</a>Implementors note</h5>\n<p>Unlike in POSIX, in WASI the bind operation is async. This enables\ninteractive WASI hosts to inject permission prompts. Runtimes that\ndon’t want to make use of this ability can simply call the native\n<code>bind</code> as part of either <code>start-bind</code> or <code>finish-bind</code>.</p>\n<h5 id=\"references\"><a class=\"doc-anchor\" href=\"#references\">§</a>References</h5>\n<ul>\n<li><a href=\"https://pubs.opengroup.org/onlinepubs/9699919799/functions/bind.html\">https://pubs.opengroup.org/onlinepubs/9699919799/functions/bind.html</a></li>\n<li><a href=\"https://man7.org/linux/man-pages/man2/bind.2.html\">https://man7.org/linux/man-pages/man2/bind.2.html</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/windows/win32/api/winsock/nf-winsock-bind\">https://learn.microsoft.com/en-us/windows/win32/api/winsock/nf-winsock-bind</a></li>\n<li><a href=\"https://man.freebsd.org/cgi/man.cgi?query=bind&amp;sektion=2&amp;format=html\">https://man.freebsd.org/cgi/man.cgi?query=bind&amp;sektion=2&amp;format=html</a></li>\n</ul>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.stream\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.stream\" class=\"fn\">stream</a>(\n    &amp;self,\n    remote_address: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.IpSocketAddress.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::IpSocketAddress\">IpSocketAddress</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.IncomingDatagramStream.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::IncomingDatagramStream\">IncomingDatagramStream</a>, <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.OutgoingDatagramStream.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::OutgoingDatagramStream\">OutgoingDatagramStream</a>), <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Set up inbound &amp; outbound communication channels, optionally to a specific peer.</p>\n<p>This function only changes the local socket configuration and does not generate any network traffic.\nOn success, the <code>remote-address</code> of the socket is updated. The <code>local-address</code> may be updated as well,\nbased on the best network path to <code>remote-address</code>.</p>\n<p>When a <code>remote-address</code> is provided, the returned streams are limited to communicating with that specific peer:</p>\n<ul>\n<li><code>send</code> can only be used to send to this destination.</li>\n<li><code>receive</code> will only return datagrams sent from the provided <code>remote-address</code>.</li>\n</ul>\n<p>This method may be called multiple times on the same socket to change its association, but\nonly the most recently returned pair of streams will be operational. Implementations may trap if\nthe streams returned by a previous invocation haven’t been dropped yet before calling <code>stream</code> again.</p>\n<p>The POSIX equivalent in pseudo-code is:</p>\n<div class=\"example-wrap\"><pre class=\"language-text\"><code>if (was previously connected) {\nconnect(s, AF_UNSPEC)\n}\nif (remote_address is Some) {\nconnect(s, remote_address)\n}\n</code></pre></div>\n<p>Unlike in POSIX, the socket must already be explicitly bound.</p>\n<h5 id=\"typical-errors\"><a class=\"doc-anchor\" href=\"#typical-errors\">§</a>Typical errors</h5>\n<ul>\n<li><code>invalid-argument</code>:          The <code>remote-address</code> has the wrong address family. (EAFNOSUPPORT)</li>\n<li><code>invalid-argument</code>:          The IP address in <code>remote-address</code> is set to INADDR_ANY (<code>0.0.0.0</code> / <code>::</code>). (EDESTADDRREQ, EADDRNOTAVAIL)</li>\n<li><code>invalid-argument</code>:          The port in <code>remote-address</code> is set to 0. (EDESTADDRREQ, EADDRNOTAVAIL)</li>\n<li><code>invalid-state</code>:             The socket is not bound.</li>\n<li><code>address-in-use</code>:            Tried to perform an implicit bind, but there were no ephemeral ports available. (EADDRINUSE, EADDRNOTAVAIL on Linux, EAGAIN on BSD)</li>\n<li><code>remote-unreachable</code>:        The remote address is not reachable. (ECONNRESET, ENETRESET, EHOSTUNREACH, EHOSTDOWN, ENETUNREACH, ENETDOWN, ENONET)</li>\n<li><code>connection-refused</code>:        The connection was refused. (ECONNREFUSED)</li>\n</ul>\n<h5 id=\"references\"><a class=\"doc-anchor\" href=\"#references\">§</a>References</h5>\n<ul>\n<li><a href=\"https://pubs.opengroup.org/onlinepubs/9699919799/functions/connect.html\">https://pubs.opengroup.org/onlinepubs/9699919799/functions/connect.html</a></li>\n<li><a href=\"https://man7.org/linux/man-pages/man2/connect.2.html\">https://man7.org/linux/man-pages/man2/connect.2.html</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/windows/win32/api/winsock2/nf-winsock2-connect\">https://learn.microsoft.com/en-us/windows/win32/api/winsock2/nf-winsock2-connect</a></li>\n<li><a href=\"https://man.freebsd.org/cgi/man.cgi?connect\">https://man.freebsd.org/cgi/man.cgi?connect</a></li>\n</ul>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.subscribe\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.subscribe\" class=\"fn\">subscribe</a>(&amp;self) -&gt; <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.Pollable.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::Pollable\">Pollable</a></h4></section></summary><div class=\"docblock\"><p>Create a <code>pollable</code> which will resolve once the socket is ready for I/O.</p>\n<p>Note: this function is here for WASI Preview2 only.\nIt’s planned to be removed when <code>future</code> is natively supported in Preview3.</p>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.unicast_hop_limit\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.unicast_hop_limit\" class=\"fn\">unicast_hop_limit</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Equivalent to the IP_TTL &amp; IPV6_UNICAST_HOPS socket options.</p>\n<p>If the provided value is 0, an <code>invalid-argument</code> error is returned.</p>\n<h5 id=\"typical-errors\"><a class=\"doc-anchor\" href=\"#typical-errors\">§</a>Typical errors</h5>\n<ul>\n<li><code>invalid-argument</code>:     (set) The TTL value must be 1 or higher.</li>\n</ul>\n</div></details></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.finish_bind\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.finish_bind\" class=\"fn\">finish_bind</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.send_buffer_size\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.send_buffer_size\" class=\"fn\">send_buffer_size</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_receive_buffer_size\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.set_receive_buffer_size\" class=\"fn\">set_receive_buffer_size</a>(&amp;self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_send_buffer_size\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.set_send_buffer_size\" class=\"fn\">set_send_buffer_size</a>(&amp;self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UdpSocket\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><a href=\"#impl-UdpSocket\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html\" title=\"struct wasi_snapshot_preview1::bindings::wasi::sockets::udp::UdpSocket\">UdpSocket</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_unicast_hop_limit\" class=\"method\"><a class=\"src rightside\" href=\"src/wasi_snapshot_preview1/lib.rs.html#66-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/struct.UdpSocket.html#tymethod.set_unicast_hop_limit\" class=\"fn\">set_unicast_hop_limit</a>(&amp;self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"type\" href=\"wasi_snapshot_preview1/bindings/wasi/sockets/udp/type.ErrorCode.html\" title=\"type wasi_snapshot_preview1::bindings::wasi::sockets::udp::ErrorCode\">ErrorCode</a>&gt;</h4></section></div></details>",0,"wasi_snapshot_preview1::bindings::wasi::sockets::udp_create_socket::UdpSocket"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()