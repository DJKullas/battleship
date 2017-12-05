#Code modified from Nat Tuck

defmodule Battleship.Game do
  alias Battleship.GameAgent


  def new do
      %{
        player1Ships: [],
        player2Ships: [],
        player1Guesses: [],
        player2Guesses: [],
        player1Name: "",
        player2Name: "",
        messages: [],
      }
    end

    def client_view(game) do
      p1s = game.player1Ships
      p1g = game.player1Guesses
      p2s = game.player2Ships
      p2g = game.player2Guesses
      ms = game.messages

      %{
        goods: Enum.filter(p1g, &(Enum.member?(p2s, &1))),
        bads: Enum.filter(p1g, &(!Enum.member?(p2s, &1))),
        myShips: p1s,
        messages: ms,
      }
    end

    def join(gname, user) do
      game = GameAgent.get(gname)

      if game do
        game
      else
        game = %{ name: gname, player: user}
        GameAgent.put(gname, game)
      end
    end

    def message(game, text) do
      ms = game.messages
      |> MapSet.new()
      |> MapSet.put(text)
      |> MapSet.to_list
      Map.put(game, :messages, ms)
    end

    def guess(game, number) do

      gs = game.player1Guesses
      |> MapSet.new()
      |> MapSet.put(number)
      |> MapSet.to_list
      Map.put(game, :player1Guesses, gs)
    end

    def setShip(game, number, direction) do
      if (Enum.count(game.player1Ships) < 5 && rem(number, 10) > 0 && rem(number, 10) < 9) do
        ship = []
        cond do
          direction == 1 ->
            ship = [number, number + 1, number + 2];
          direction == 2 ->
            ""
          direction == 3 ->
            ""
          direction == 4 ->
            ""
          end

        ss = game.player1Ships
        |> MapSet.new()
        |> MapSet.put(ship)
        |> MapSet.to_list
        Map.put(game, :player1Ships, ss)
      else

      ss = game.player1Ships
      Map.put(game, :player1Ships, ss)

      end
    end
  end
