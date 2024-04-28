import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import NavButton from "./NavButton";
import { ModeToggle } from "./mode-toggle";
import { menuOptions } from "../utils/menu";
import "../styles/gradientStyle"

export function Header({ connectWallet, account, signer }: 
    { connectWallet: any; account: string | null; signer: any;}) {

    const navigator = useNavigate();

    return (
        <div className="fixed w-full h-16 bottom-0 lg:top-0 z-20 lg:shadow-2xl lg:backdrop-blur-md lg:bg-background/50 bg-background flex flex-col justify-center">
            <div className="w-full bg-transparent flex flex-row justify-center items-center lg:px-12 h-14">
                {/* <img className="cursor-pointer h-[100%] py-2 hidden lg:inline-block" src={Logo} alt="" onClick={() => navigator('/')}/> */}
                <p className="cursor-pointer text-primary mx-2 hidden lg:inline-block" onClick={() => navigator('/')}>Revjob</p>
                <div className="flex-1 flex flex-row h-[100%] justify-center items-center hidden lg:flex space-x-6">
                    <Button variant="ghost" className="h-[100%] w-24 relative glow-bottom-border hover:bg-transparent group" onClick={() => navigator('/')}><p className="group-hover:text-primary group-hover:text-shadow-primary-glow">Home</p></Button>
                    {menuOptions.map((option, index) => (
                        <NavButton key={index} to={option.to}>{option.name}</NavButton>
                    ))}
                </div>

                <div className="h-[100%] flex flex-row justify-center items-center lg:space-x-6">
                    <div className="flex flex-col items-center justify-center h-[100%] hidden lg:flex">
                        <ModeToggle/>
                    </div> 
                    <div className="relative px-4 py-2 my-2 text-foreground rounded-lg shadow focus:outline-none truncate hidden lg:inline-block cursor-pointer" onClick={connectWallet}>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center">
                            {signer 
                            ? "Connected: " +
                            account?.substring(0, 5) +
                            "..." +
                            account?.substring(38, 42) 
                            : "Connect Wallet"
                            }
                        </div>
                        {signer 
                        ? "Connected: " +
                        account?.substring(0, 5) +
                        "..." +
                        account?.substring(38, 42) 
                        : "Connect Wallet"
                        }
                    </div>
                </div>           
            </div>
        </div>
    )
}