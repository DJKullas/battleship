#Some of this code from Nat Tuck

defmodule BattleshipWeb.PlayerChannel do
  use BattleshipWeb, :channel
  alias Battleship.GameAgent
  alias Battleship.Game

  def join("player:" <> name, _payload, socket) do


    if authorized?(socket, name) do
      game = GameAgent.get(name) || Game.new()
      GameAgent.put(name, game)
      socket = socket
      |> assign(:name, name)
      {:ok, Game.client_view(game), socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("guess", %{"cell" => c}, socket) do
    name = socket.assigns[:name]
      game = name
      |> Battleship.GameAgent.get()
      |> Game.guess(c)
      GameAgent.put(name, game)
      {:reply, {:ok, Game.client_view(game)}, socket}
  end

  def handle_in("message", %{"text" => t}, socket) do
    send = t <> "\n"
    name = socket.assigns[:name]
      game = name
      |> Battleship.GameAgent.get()
      |> Game.message(send)
      GameAgent.put(name, game)
      {:reply, {:ok, Game.client_view(game)}, socket}
  end

  def handle_in("setShip", %{"cell" => c, "direction" => d}, socket) do
    name = socket.assigns[:name]
      game = name
      |> Battleship.GameAgent.get()
      |> Game.setShip(c, d)
      GameAgent.put(name, game)
      {:reply, {:ok, Game.client_view(game)}, socket}
  end

  defp authorized?(socket, name) do
    socket.assigns[:username] == name
  end
end
