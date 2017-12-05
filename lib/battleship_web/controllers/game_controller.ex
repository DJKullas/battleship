#Code modified from Nat Tuck

defmodule BattleshipWeb.GameController do
  use BattleshipWeb, :controller
  alias Battleship.GameAgent
  alias Battleship.Game

  def show(conn, %{"gname" => gname}) do
    user = get_session(conn, :user)
    IO.puts user
    IO.puts "after"
    game = GameAgent.get(gname)

    if !is_nil(user) and !is_nil(game) do
      render conn, "show.html", user: user, game: gname
    else
      conn
      |> put_flash(:error, "Bad user or game chosen")
      |> redirect(to: "/")
    end
  end

  def join(conn, %{"join_data" => join}) do
    game = Game.join(join["game"], join["user"])

    conn
    |> put_session(:user, join["user"])
    |> redirect(to: "/g/" <> join["game"])
  end
end
