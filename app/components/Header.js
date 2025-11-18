// app/components/Header.js
export default function Header() {
  return (
    <header className="header">
      {/* Animated Code Snippets */}
      <div className="code-snippet python">print("Hello World")</div>
      <div className="code-snippet javascript">console.log("Hello World");</div>
      <div className="code-snippet java">System.out.println("Hello World");</div>
      <div className="code-snippet cpp">std::cout &lt;&lt; "Hello World";</div>
      <div className="code-snippet ruby">puts "Hello World"</div>
      <div className="code-snippet go">fmt.Println("Hello World")</div>
      <div className="code-snippet rust">println!("Hello World");</div>
      <div className="code-snippet php">echo "Hello World";</div>
      <div className="code-snippet csharp">Console.WriteLine("Hello World");</div>
      <div className="code-snippet swift">print("Hello World")</div>
      <div className="code-snippet kotlin">println("Hello World")</div>
      <div className="code-snippet typescript">console.log("Hello World");</div>
      
      <div className="container">
        <div className="header-content">
          <h1 className="name">Le Tezz Khan</h1>
          <p className="bio">
            IT Support Consultant with 6+ years' experience in hybrid cloud and enterprise environments. 
            Expert in troubleshooting, automation, and process optimization, delivering faster resolutions, 
            smarter workflows, and user-focused solutions.
          </p>
        </div>
      </div>
    </header>
  );
}